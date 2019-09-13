const faculty = ["นิติศาสตร์", "บริหารธุรกิจ", "มนุษยศาสตร์", "ศึกษาศาสตร์", "วิทยาศาสตร์", "รัฐศาสตร์", "เศรษฐศาสตร์", "สื่อสารมวลชน", "พัฒนาทรัพยากรมนุษย์", "PRE-DEGREE"];
const facultyEng = ["law", "busi", "human", "edu", "sci", "pol", "eco", "commu", "hr", "pre"];
const regisDate = ["วันแรก", "วันที่สอง", "วันที่สาม", "วันที่สี่"];
const btnColor = ["danger", "primary", "success", "dark"];
(() => {
    const regD = regisDate.map((date, j) => {
        return faculty.map((fac, i) => {
            const td1 = `
                <tr class="border${i+1}">
                    <td class="fac${j+1}">${fac} </td>
                    <td class="tdSecond">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control showCode" id="${facultyEng[i]}-First-day${j+1}" maxlength="10">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-caret-square-right"></i></span>
                            </div>
                            <input type="text" class="form-control showCode" id="${facultyEng[i]}-Last-day${j+1}" maxlength="10">
                        </div>
                    </td>
                    <td rowspan="10" class="tdDate${j+1} tdate">
                        <div class="input-group mb-3">
                            <input type="text" name="date" id="iDate${j+1}" class="form-control showDate Date${j+1}" value="" placeholder="${date}" autocomplete="off"
                                data-select="date">
                            <div class="input-group-append">
                                <button class="btn btn-${btnColor[j]}" type="button" data-toggle="select">
                                    <i class="far fa-calendar-alt"></i></button>
                            </div>
                        </div>
                    </td>
                </tr>
                `;
            const td2 = `
                <tr class="border${i+1}">
                    <td class="fac${j+1}">${fac} </td>
                    <td class="tdSecond">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control showCode" id="${facultyEng[i]}-First-day${j+1}" maxlength="10">
                            <div class="input-group-append">
                                <span class="input-group-text"><i class="fas fa-caret-square-right"></i></span>
                            </div>
                            <input type="text" class="form-control showCode" id="${facultyEng[i]}-Last-day${j+1}" maxlength="10">
                        </div>
                    </td>
                </tr>
                `;
            if (i == 0) {
                return td1;
            } else {
                return td2;
            }
        }).join("");
    }).join("");
    document.querySelector('tbody').innerHTML += regD;
    //document.querySelector('thead').insertAdjacentHTML('afterend', regD);

})();
const DOM = {
    facHead: document.querySelectorAll('.fac'),
    inputText: document.querySelectorAll('input'),
    inputShowCode: document.querySelectorAll('.showCode'),
    inputShowDate: document.querySelectorAll('.showDate'),
    tdDate: document.querySelectorAll('.tdate'),
    tdSecond: document.querySelectorAll('td.tdSecond'),
    btnSave: document.querySelector('#save'),
    btnClear: document.querySelector('#clear'),
    ulLink: document.getElementById('#navbardrop')
};
DOM.inputText[0].focus();
const getSet = () => {
    if (localStorage.length > 0) {
        //code.value = localStorage.getItem(`showCode${i}`);
        const getLocal = JSON.parse(localStorage.getItem('key'));

        for (let val of getLocal) {
            DOM.inputShowCode[val.index].value = val.icode;
        }
    }

    let setCode = [];

    DOM.inputShowCode.forEach((code, i) => {

        code.addEventListener("keyup", () => {

            const ic = {
                index: i,
                icode: code.value
            };

            if (code.value.length > 0) {
                if (localStorage.length === 0) {
                    setCode.push(ic);
                } else if (!(ic.index in setCode) && localStorage.length > 0) {
                    setCode = JSON.parse(localStorage.getItem('key'));
                    setCode.push(ic);
                } else if (ic.index in setCode && localStorage.length > 0) {
                    setCode = JSON.parse(localStorage.getItem('key'));
                    setCode[i].icode = code.value;
                }

                localStorage.setItem('key', JSON.stringify(setCode));

                //localStorage.setItem(`showCode${i}`, code.value);
            }
        });

        code.addEventListener("keypress", (e) => {
            if (e.which === 13 || e.keycode === 13) {
                if (DOM.inputShowCode[i] === DOM.inputShowCode[DOM.inputShowCode.length - 1]) {
                    DOM.btnSave.focus();
                } else {
                    DOM.inputShowCode[i + 1].focus();
                }
            }
        });
    });
    DOM.inputShowDate.forEach((date, index) => {
        if (localStorage) {
            date.value = localStorage.getItem(`showDate${index}`);
        }
    });
    DOM.tdDate.forEach((td, i) => {
        td.addEventListener('mouseout', () => {
            localStorage.setItem(`showDate${i}`, DOM.inputShowDate[i].value);
        });
        td.addEventListener('mouseenter', () => {
            localStorage.setItem(`showDate${i}`, DOM.inputShowDate[i].value);
        });
    });
    DOM.btnSave.addEventListener('click', () => {
        // let testDate = [];
        // DOM.inputShowDate.forEach((ed, i) => {

        // })
        // console.log(testDate);

        const el = document.createElement('h2')
        el.innerHTML = `
        <a href="../major-term.html">เทอม 1-2 <i class="fas fa-angle-double-right"></i></a> <br>
        <a href="../summer-term.html">เทอม Summer <i class="fas fa-angle-double-right"></i></a> <br>
        <a href="../repair-term.html">เทอมซ่อม  <i class="fas fa-angle-double-right"></i></a>
        `;
        DOM.inputShowDate.forEach((d, i) => {
            if (d.value) {
                localStorage.setItem(`showDate${i}`, d.value);
            }
        });
        swal({
            title: "บันทึกข้อมูลเรียบร้อยแล้ว!",
            text: "โปรดเลือกเทอมที่จะลงทะเบียน",
            icon: "success",
            button: "ตกลง",
        }).then((value) => {
            swal({
                title: "เลือกเทอมที่จะลงทะเบียน",
                content: el,
            });
        });
    });
    DOM.btnClear.addEventListener('click', () => {
        swal({
                title: "ลบข้อมูลทั้งหมดหรือไม่ ?",
                text: "ข้อมูลทั้งหมดจะถูกลบและไม่สามารถกู้คืนได้!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    localStorage.clear();
                    swal("ข้อมูลทั้งหมดถูกลบเรียบร้อยแล้ว!", {
                        icon: "success",
                    }).then((value) => {
                        location.reload();
                    });
                } else {

                }
            });;
    });
}
getSet();