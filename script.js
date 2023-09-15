// Criando a classe da calculadora
class calculator{
    constructor(){
        // Aqui é a propriedade que receberá os valores digitados
        this.displayValue = " ";
    }
    // este método adiciona os valores a propriedade displayValue permitindo que o usuário veja caracteres na tela
    appendToDisplay(value){
        this.displayValue += value;
        // chamamos o método diaplay dentro do método appendToDisplay para que quando o usuario degitar alguma tecla da calculadora o valor que foi armazenado na propriedade displayValue seja exibida na tela
        this.updateDisplay();
    }
    // Este método atualiza o elemento inout no html com o valor atual que está armazenado no diaplayValue
    updateDisplay(){
        document.getElementById("displayContent").value = this.displayValue;
    }
    // Este método limpa o valor que está armazenado em displayValue e chama a função updateDisplay para atualizar a tela com um valor vazio.
    clearDisplay(){
        this.displayValue = " ";
        this.updateDisplay();
    }
    // O método trycatch executa o caculo da expressão amtemática contida displasValue. Esse método utiliza a função eval() para avaliar a expressão e, 
    // se for bem sucedida, atualiza o displayValue com o resultado e chama a função updateDisplay(). Se ocorrer um erro durante a avaliação, ele atualiza o displayvalue com a mensagem "Erro"
    // e chama a função updateDisplay().
    calculate(){
        try{
        //const result = eval(this.displayValue);
        const result = math.evaluate(this.displayValue);
        this.displayValue = result.toString();
        this.updateDisplay();

        } catch(error){
            this.displayValue = "Erro"
            this.updateDisplay();
        }
    }
}

// criando o objeto ou instanciando a classe
// objeto chamado calc
const calc = new calculator();
