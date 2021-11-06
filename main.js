var generatedPass , passLen , generate , copy;
      const $ = elem => document.querySelector(elem);
      generatedPass = $("#generatedPass");
      generate = $("#generate");
      copy = $("#copy");
      const characters = ['A' , 'B' , 'C' , 'D' , 'E' , 'F' , 'G' , 'H' , 'I' , 'J' , 'K' , 'L' , 'M' , 'N' , 'O' , 'P' , 'Q' , 'R' , 'S' , 'T' , 'U' , 'V' , 'W' , 'X' , 'Y' , 'Z' , 'a' , 'b' , 'c' , 'd' , 'e' , 'f' , 'g' , 'h' , 'i' , 'j' , 'k' , 'l' , 'm' , 'n' , 'o' , 'p' , 'q' , 'r' , 's' , 't' , 'u' , 'v' , 'w' , 'x' , 'y' , 'z' , '0' , '1' , '3' , '4' , '5' , '6' , '7' , '8' , '9' , '#' , '&' , '@' , '%' , '/' , '?' , '!'];
      function generatePassword() {
        passLen = Number($("#passLen").value);
        generatedPass.value = "";
        var i = 0;
        while(passLen > i){
          let randomNum = Math.floor(Math.random() * characters.length + 1);
          generatedPass.value += characters[randomNum-1];
          i++;
        }
      }
      generate.addEventListener("click" , generatePassword);
      copy.addEventListener("click" , function() {
        generatedPass.select();
        document.execCommand("copy");
        alert("Contraseña guardada con exito 👍👍 \n" + generatedPass.value);
        });
