let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnX = true;
let count = 0;

const winpattern = [[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[0, 4, 8]
];

const resetGame = () => {
    turnX = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X"
            turnX = false;
        } else {
            box.innerText = "O"
            turnX = true;
        }
        box.disabled = true;
        count++;

        let iswinner = checkwinner();
        if (count === 9 && !iswinner) {
            draw();
        }

    })
});

const draw = () => {
    msg.innerText = "Oops! The Game was a draw.";
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showwiner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


const checkwinner = () => {
    for (let pattern of winpattern) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;


        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3 && val3 == val1) {
                showwiner(val1);
                return true;
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

