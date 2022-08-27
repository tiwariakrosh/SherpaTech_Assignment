// Langauge changes
const checkbox = document.getElementById('language-toggle');

const en = document.querySelectorAll('.en');
const ar = document.querySelectorAll('.ar');
checkbox.addEventListener('click', function handleClick() {

    if (checkbox.checked) {
        for (const e of en) {
            e.style.display = 'block';
        }
        for (const a of ar) {
            a.style.display = 'none';
        }
    } else {
        for (const e of en) {
            e.style.display = 'none';
        }
        for (const a of ar) {
            a.style.display = 'block';
        }
    }
});


//Input Validation
const submit = document.getElementById("btn1");

submit.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();
    const firstNameField = document.getElementById("MobileNumber");
    let valid = true;

    if (!firstNameField.value) {
        const nameError = document.getElementById("numError");
        nameError.classList.add("visible");
        firstNameField.classList.add("invalid");
        nameError.setAttribute("aria-hidden", false);
        nameError.setAttribute("aria-invalid", true);
    }

    else {
        const listItem = document.getElementById("listItem2");
        listItem.classList.add("visible");
    }
    return valid;
}

// Text slide top to buttom
var all = $(' .slide').get();

function animate() {
    var elem = all.shift();
    $(elem).animate({
        "opacity": 1
    },
        function () {
            if (all.length > 0)
                window.setTimeout(animate, 500);
        });
}
animate();

// hiding item after 3 second
setTimeout(function () {
    $('#listItem1').hide();
    $('.text').fadeOut();
}, 000);

// hiding item after 3 second
setTimeout(function () {
    $('#listItem').fadeOut();
}, 3000);

setTimeout(function () {
    $('#listItem1').show();
    $('.text').fadeIn();
}, 4000);

// show next div
$("#btn1").click(function () {
    if ($(".container .item:visible").next().length != 0)
        $(".container .item:visible").fadeOut(function () {
            $(this).next().fadeIn();
            $('.hamburger ').fadeOut();
        });
    else {
        $(".container div:visible").fadeOut(function () {
            $(".container .item:first").fadeIn();
        });
    }
    return false;
});

$("#btn2").click(function () {
    if ($(".container .item:visible").next().length != 0)
        $(".container .item:visible").fadeOut(function () {
            $(this).next().fadeIn();
            $('.switch ').fadeOut();
            $('.text').fadeOut();
        });
    else {
        $(".container div:visible").fadeOut(function () {
            $(".container .item:first").fadeIn();
        });
    }
    return false;
});

$("#listItem2, #listItem3").each(function () {
    $(this).hide();
});

