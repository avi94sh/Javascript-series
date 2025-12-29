// ["","",""]
//[{},{},{}]

const mycoding = [
    {
        lanhaugename: "JavaScript",
        languagefileName: "js"
    },
    {
        lanhaugename: "Python",
        languagefileName: "py"
    },
    {
        lanhaugename: "C++",
        languagefileName: "cpp"
    }
];

mycoding.forEach((item) =>
{
    console.log(item.lanhaugename);
    console.log(item.languagefileName);
})