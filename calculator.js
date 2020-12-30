'use strict';
class Calculator {

    constructor() {
        

        /* Déclaration d'éléments */
        const buttonPlus = document.createElement('button');
        buttonPlus.textContent = "+";
        buttonPlus.id = "operators";
        const buttonLess = document.createElement('button');
        buttonLess.textContent = "-";
        buttonLess.id = "operators";
        const buttonMultiply = document.createElement('button');
        buttonMultiply.textContent = "x";
        buttonMultiply.id = "operators";
        const buttonDivide = document.createElement('button');
        buttonDivide.textContent = "/";
        buttonDivide.id = "operators";
        const button7 = document.createElement('button');
        button7.textContent = "7";
        button7.id = "numbers";
        const button8 = document.createElement('button');
        button8.textContent = "8";
        button8.id = "numbers";
        const button9 = document.createElement('button');
        button9.textContent = "9";
        button9.id = "numbers";
        const button4 = document.createElement('button');
        button4.textContent = "4";
        button4.id = "numbers";
        const button5 = document.createElement('button');
        button5.textContent = "5";
        button5.id = "numbers";
        const button6 = document.createElement('button');
        button6.textContent = "6";
        button6.id = "numbers";
        const button1 = document.createElement('button');
        button1.textContent = "1";
        button1.id = "numbers";
        const button2 = document.createElement('button');
        button2.textContent = "2";
        button2.id = "numbers";
        const button3 = document.createElement('button');
        button3.textContent = "3";
        button3.id = "numbers";
        const button0 = document.createElement('button');
        button0.textContent = "0";
        button0.id = "numbers";
        const buttonPoint = document.createElement('button');
        buttonPoint.textContent = ".";
        buttonPoint.id = "numbers";
        const buttonAc = document.createElement('button');
        buttonAc.textContent = "AC";
        buttonAc.id = "efface";
        const buttonResult = document.createElement('button');
        buttonResult.textContent = "=";
        buttonResult.id = "result";
        const container = document.createElement('div');
        container.id = "container";
        const line1 = document.createElement('div');
        line1.id = "line1";
        const line2 = document.createElement('div');
        line2.id = "line2";
        const line3 = document.createElement('div');
        line3.id = "line3";
        const line4 = document.createElement('div');
        line4.id = "line4";
        const lines = document.createElement('div');
        lines.id = "lines";
        const view = document.createElement('div');
        view.id = "view";
        const body = document.querySelector('body');

        /* Positions de mes éléments et classes sans boucle*/
        /* Base */
        body.prepend(container);
        container.append(lines);
        lines.append(line1);
        lines.append(line2);
        lines.append(line3);
        lines.append(line4);

        /* Boutons line1 */
        line1.prepend(button0);
        line1.prepend(button1);
        line1.prepend(button4);
        line1.prepend(button7);
        line1.prepend(buttonPlus);
        /* Boutons line2 */
        line2.prepend(buttonPoint);
        line2.prepend(button2);
        line2.prepend(button5);
        line2.prepend(button8);
        line2.prepend(buttonLess);
        /* Boutons line3 */
        line3.prepend(buttonAc);
        line3.prepend(button3);
        line3.prepend(button6);
        line3.prepend(button9);
        line3.prepend(buttonMultiply);
        /* Boutons line4 */
        line4.prepend(buttonResult);
        line4.prepend(buttonDivide);
        /* Affichage */
        container.prepend(view);

        document.addEventListener("DOMContentLoaded", function() {
            const screenDisplay = document.getElementById('view');
            const spans = document.querySelectorAll('button');
            const spanArray = Array.from(spans);
            document.querySelectorAll('#operators')[1].innerText = '-';
            document.querySelectorAll('#operators')[2].innerText = '*';
    
            spanArray.map(button => button.addEventListener('click', function() {
                if (button.innerText !== "=") {
                    screenDisplay.innerText += button.innerText
                };
                if (button.innerText === "=") {
                    screenDisplay.innerText = eval(screenDisplay.innerText)
                };
                if (button.innerText === "AC") {
                    screenDisplay.innerText = ""
                };
            }));
        });
    }
}

export default Calculator;