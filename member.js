function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("memberSkills");
    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        member.style.display = "none";
    } else {
        memberSkills.style.display = "none";
        member.style.display = "block";
    }
}