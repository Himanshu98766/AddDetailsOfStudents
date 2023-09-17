var items = $('#items');

$('form button').click(function (e) {
    let roll = $('#roll');
    let name = $("#name");
    let marks = $("#marks");

    let rollVal = roll.val();
    let nameVal = name.val();
    let marksVal = marks.val();

    e.preventDefault();

    if (rollVal === "" || nameVal === "" || marksVal === "") {
        alert("Please fill all details");
    } else {

        let item = '<div class = "item">RollNo - <span class = "hightlight">' + rollVal + '</span> , <span class = "hightlight"> ' + nameVal + '</span> have got <span class = "hightlight"> ' + marksVal + '</span> marks </div>';

        items.append(item);

        roll.val("");
        name.val("");
        marks.val("");
    }
})