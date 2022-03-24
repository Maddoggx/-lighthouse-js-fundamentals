const instructorWithLongestName = functio(instructors){
  let longName = {name: " ", courses: " "};
    for (let i = 0; i < instructors.length; i ++) {
      let currentName = instructors[i].name;
      
      if (longName.name.length < currentName.length) {
        longName = instructors[i];
    }
  }
return longName;
};


  console.log(instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" }
  ]));
  console.log(instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" }
  ]));  