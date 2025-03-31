---
layout: post
title: A Philosophy of Software Design (Notes and Takeaways)
---

*My notes/takeaways from John Ousterhout's fantastic [book](https://www.amazon.com/dp/173210221X) on software design.*

### Defining software design (and the nature of complexity)

Ousterhout defines **software design** as the practice of reducing complexity in a software system and **complexity** as "anything related to the structure of the software system that makes it hard to understand and modify the system." Examples of complexity include:
- Ambiguous, vague, or inconsistent variable names
- Inconsistent design patterns
- Lots of "shallow" modules that don't do very much
- Too many configuration parameters

Ousterhout argues that complexity is "incremental" and "comes about because hundreds or thousands of small dependencies and obscurities build up over time" making it "hard to control." Thus, the only way to control complexity is through a zero tolerance policy in code reviews. 

There are three main symptoms of complexity:
1. High cognitive load (it takes a long time for developers to understand the codebase and complete tasks)
2. Change amplification (a small change requires modifications to many different parts of the codebase)
3. Unknown unknowns (the codebase is so complex that developers can no longer be certain that a code change won't introduce new bugs)

### Tactical vs. Strategic Programmer

Ousterhout dedicates a lot of time to describing the unique mindset of a developer who cares deeply about software design. He describes this type of developer a "strategic programmer." Conversely, a "tactical programmer" is one who does not care about software design. This type of developer often moves very fast in the short term, but creates obscene amounts of tech debt that ultimately hampers productivity in the long term. 

Here is a more detailed overview of the "tactical" vs. "strategic" archetypes:

| Tactical Programmer | Strategic Programmer |
|---------------------|----------------------|
| 0% of time on software design | 10-20% of time on software design |
| 0% of time on documentation | 5% of time on documentation |
| Values speed > reducing complexity | Values reducing complexity > speed |
| Goes with their first idea to "get it working" as quickly as possible | Often considers multiple approaches ("designs it twice")|
| Feature focused | Abstraction focused |
| "Accepts to unblock" | Is generally considered a nit picky code reviewer |

Mindset is perhaps the biggest barrier to good software design. If a developer does not have the right mindset, they will never produce good software designs. 

### Techniques for good software design

#### Deep modules

While software design is not a hard science, Ousterhout firmly believes there is a "right" way to do software design and describes these best practices in his book. In my opinion, his most powerful recommendation is that "deep modules" lead to better designs. A deep module is one that "provides powerful functionality yet has a simple interface." Since the introduction of a new module always incurs a cost that is proportional to its interface, this cost must be balanced with an implementation that supports powerful functionality. This recommendation goes against the dogma that functions should be "as short as possible," which is what many of us were taught in our Computer Science courses. 

So what does a "deep module" look like in practice? The differences between Java and Python's JSON libraries illustrate this principle quite well. To understand these differences, let's look at how you would encode and decode a JSON-formatted string in Java and Python, respectively:

```java
import org.json.JSONObject;

JSONObject json = new JSONObject();
json.put("name", "Alice");
json.put("age", 30);

String jsonString = json.toString();
JSONObject parsedJson = new JSONObject(jsonString);

String name = (String) parsedJson.get("name");
int age = (int) parsedJson.get("age");
```

```python
import json

data = {"name": "Alice", "age": 30}

json_str = json.dumps(data)
parsed_data = json.loads(json_str)

name = parsed_data["name"]
age = parsed_data["age"]
```

Based on the above code, I'd argue that python's [`json` module](https://github.com/python/cpython/blob/main/Lib/json/__init__.py)
is deeper than Java's [`JSONObject`](https://github.com/stleary/JSON-java/blob/master/src/main/java/org/json/JSONObject.java). Let's dig into why:

- `json.dumps` is flexible enough to accept native Python dictionaries as input, so, in Python, there is no need to create an intermediate data structure to hold the JSON-formatted data. Thus, the JSON encoding process in Python requires just one step: call `json.dumps`
on a dictionary. Whereas, the JSON encoding process in Java is two steps: first, 
store all your data in a `JSONObject`, and then, call `JSONObject.toString()`.
- Since `json.loads` converts a JSON formatted string into a dictionary, Python developers
can use familiar syntax for parsing JSON data. However, Java developers must learn
a whole new API for parsing JSON data. To make matters worse, the `JSONObject`'s general purpose method for extracting data, `get`, returns an `Object`, requiring the client to explicitly type cast the result. If clients want type casting done for them, then they must use a specific method for each type of data (`getBoolean`, `getInt`, etc.). This design choice results in the existance of over [30 public methods for extracting data](https://github.com/stleary/JSON-java/blob/master/src/main/java/org/json/JSONObject.java), all of which basically do the same thing.

In summary, Python's `json` module exposes a simple interface for encoding and 
decoding JSON that provides powerful functionality, taking care of important details like
type casting. Conversing, `JSONObject` is a much shallower module that puts on 
onus of type casting on the client, exposing too much complexity and significantly 
increasing cognitive load. 

#### Choosing good names

In the book, Ousterhout also offers a lot of helpful heuristics for choosing good variable names. The book goes into much more detail, but here are his high level recommendations:
- A good variable name creates a clear image in the reader's mind of what the variable represents
- A good variable name is precise (not too vague)
- A good variable name is consistent. I.e., if the same entity is used in many different
places, it has the same name
- A good variable name is succinct. It captures the "most important aspects of the entity in just a few words" and is not too specific. Obviously, choosing names that are both precise
and succinct is a challenge, but it's an important balance to strike

#### Writing good comments

Ousterhout's emphasis on comments came as a surprise to me, since, in school, I learned that code should be "self documenting." Ousterhout pushes back on this conventional wisdom, arguing that comments play a crucial role in reducing complexity by describing the code in a different level of detail, that is often more suitable for human comprehension. 

A common complaint about comments is that they are hard to maintain, and often become outdated. Ousterhout argues that the only way to get around this is for developers to dedicate extra time (~5% of their time) to writing and updating comments. While comments do require an up-front investment, this investment will pay dividends in the future by making it easier for new developers to understand the codebase and become productive more quickly. Ousterhout's recommendations for comments are detailed, spanning several chapters of his book, but they can be boiled down into these basic heuristics:
1. Good comments make the code more obvious
2. Good comments provide context at a different level of detail from the code. Whereas, bad comments just repeat the code
- Comments with less detail help to enhance the developer's intuition about what the code is doing. For example, you might want to add an implementation comment next to a complex chunk of code that summarizes what it is doing in lay man's terms 
- Comments with more detail give developers a more precise understanding of the code. For example, interface comments describing the exact input and output types of a method provides a developer with a more precise understanding of how to invoke the method
3. Good comments are formatted according to language conventions
4. Good comments are placed as close to the relevant code as possible
5. Good comments are put in the code itself, rather than the commit log
6. It is always more fun to write comments first, before writing implementation code, as opposed to writing comments after the code has already been written

### Closing thoughts

There are some really important concepts in *A Philosophy of Software Design* that my notes
don't cover, including:
- Defining errors out of existance
- Designing for performance
- Contrasting software trends (e.g., Agile Development) with software design

And of course, my notes leave out a litany of important details, caveats, and examples, so 
definitely go get yourself a copy of APOSD!!

Finally, as the author notes in the book's introduction, *A Philosophy of Software Design* is an "opinion piece," so naturally, there are going to be folks who disagree with 
Ousterhout's ideas about software design. Here are two good sources of differing opinions:
- Internet of Bugs' [review of APOSD](https://www.youtube.com/watch?v=4xqkI953K6Y)
- John Ousterhout's conversation with the author of Clean Code, X, about areas
where they disagree

### Resources

- [*A Philosophy of Software Design*](https://www.amazon.com/dp/173210221X)
- [John Ousterhout's website](https://web.stanford.edu/~ouster/cgi-bin/home.php)

