students=[];
function submit(){

    var name1=document.getElementById("student1").value;
    var name2=document.getElementById("student2").value;
    var name3=document.getElementById("student3").value;
    var name4=document.getElementById("student4").value;
   
    students.push(name1);
    students.push(name2);
    students.push(name3);
    students.push(name4);

    document.getElementById("display_name").innerHTML=students;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
    students.sort();
    document.getElementById("display_name").innerHTML=students;
}