const dOm = {
    select: document.querySelector('select'),
    tbody: document.querySelector('table tbody'),
    term: document.querySelector('span.thisterm')
}


const createMajor = () => {

    if (dOm.term.innerHTML === "ซ่อม") {
        for (let i = 0; i < 3; i++) {
            let optionDom = document.createElement('option');
            optionDom.setAttribute("class", "color");
            dOm.select.appendChild(optionDom);
        }
    } else {
        for (let i = 0; i < 4; i++) {
            let optionDom = document.createElement('option');
            optionDom.setAttribute("class", "color");
            dOm.select.appendChild(optionDom);
        }
    }

    for (let j = 0; j < 10; j++) {
        let tr1 = `
            <tr>
                <td class="td"> ${j+1}. </td>
                <td  class="borderd"> <input  class="ramid" maxlength="10" > </td>
                <td  class="borderd"> <input  class="name" placeholder="ชื่อจริง ชื่อเล่น ตามสะดวก"> </td>
                <td  class="borderd"> <input  class="credit" maxlength="2"> </td>
                <td  class="borderd"> <input  class="regisdate"></td>
                <td  class="borderd"> <input  class="datefee"> </td>
                <td  class="borderd"> <input  class="keepcost" placeholder="ระบุเองจ้า(ถ้ามี)"> </td>
                <td  class="borderd"> <input  class="total" readonly> </td>
            </tr>
        `;
        let tr2 = `
            <tr>
                <td class="td"> ${j+1}. </td>
                <td  class="borderd"> <input  class="ramid" maxlength="10"> </td>
                <td  class="borderd"> <input  class="name" placeholder="ชื่อจริง ชื่อเล่น ตามสะดวก"> </td>
                <td  class="borderd"> <input  class="credit" maxlength="2"> </td>
                <td  class="borderd"> <input  class="regisdate"></td>
                <td  class="borderd"> <input  class="datefee"> </td>
                <td  class="borderd" style="display: none;"> <input  class="keepcost" disabled> </td>
                <td  class="borderd"> <input  class="total" readonly> </td>
            </tr>
        `;
        if (dOm.term.innerHTML === "ซ่อม") {
            dOm.tbody.innerHTML += tr2;
        } else {
            dOm.tbody.innerHTML += tr1;
        }
    }
}

window.onload = createMajor();
document.querySelectorAll('table input')[0].focus();