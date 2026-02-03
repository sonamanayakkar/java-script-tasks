

let input = document.querySelector("#input")
let trows = document.querySelector("tbody");
let total = document.querySelector("#total");

let datas = []; //(3) ['sonu', 'deepan', 'vicky']

let incree = 0
let sum=0
let add = () => {
    if (input.value != "" ) {

        datas.push(input.value);
        // console.log(datas);


        if (datas.length >= 1) {
            let create = document.createElement("tr")
            create.innerHTML = `
                <tr>
                    <td>${datas.length}</td>
                    <td>${datas[incree]}</td>
                </tr>
    `
            trows.appendChild(create)
            incree++;
            sum++;
        }
        input.value=""

        total.textContent=sum



    } 

}



