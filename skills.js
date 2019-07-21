data = [
    {
        language: "Bash", 
        level: 50
    },
    {
        language: "C/C++",
        level: 30
    },
    {
        language: "Javascript",
        level: 67
    },
    {
        language: "Python",
        level: 65
    },
    {
        language: "SQL",
        level: 40
    },
    {
        language: "HTML",
        level: 90
    },
    {
        language: "Matlab",
        level: 30
    },
    {
        language: "CSS",
        level: 90
    },
    {
        language: "Git",
        level: 55
    },
    {
        langugae: "Illustrator",
        level: 90
    }
];

const margin = 60;
const width = 1000 - 2 * margin;
const height = 600 - 2 * margin;

const svg = d3.select("svg");

const chart = svg.append("g")
    .attr("transform", `translate(${margin}, ${margin})`);

const yScale = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 100]);

chart.append("g")
    .call(d3.axisLeft(yScale));

const xScale = d3.scaleBand()
    .range([0, width])
    .domain(data.map((s) => s.language))
    .padding(0.2)

chart.append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

