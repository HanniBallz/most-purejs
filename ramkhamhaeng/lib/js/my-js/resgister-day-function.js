const facultyCode = [{
        name: "นิติศาสตร์",
        code: "01",
        day: {
            first1: localStorage.getItem(`showCode0`),
            first2: localStorage.getItem(`showCode1`),
            second1: localStorage.getItem(`showCode20`),
            second2: localStorage.getItem(`showCode21`),
            third1: localStorage.getItem(`showCode40`),
            third2: localStorage.getItem(`showCode41`),
            fourth1: localStorage.getItem(`showCode60`),
            fourth2: localStorage.getItem(`showCode61`)
        }
    }, {
        name: "บริหารธุรกิจ",
        code: "02",
        day: {
            first1: localStorage.getItem(`showCode2`),
            first2: localStorage.getItem(`showCode3`),
            second1: localStorage.getItem(`showCode22`),
            second2: localStorage.getItem(`showCode23`),
            third1: localStorage.getItem(`showCode42`),
            third2: localStorage.getItem(`showCode43`),
            fourth1: localStorage.getItem(`showCode62`),
            fourth2: localStorage.getItem(`showCode63`)
        }
    }, {
        name: "มนุษยศาสตร์",
        code: "03",
        day: {
            first1: localStorage.getItem(`showCode4`),
            first2: localStorage.getItem(`showCode5`),
            second1: localStorage.getItem(`showCode24`),
            second2: localStorage.getItem(`showCode25`),
            third1: localStorage.getItem(`showCode44`),
            third2: localStorage.getItem(`showCode45`),
            fourth1: localStorage.getItem(`showCode64`),
            fourth2: localStorage.getItem(`showCode65`)
        }
    },
    {
        name: "ศึกษาศาสตร์",
        code: "04",
        day: {
            first1: localStorage.getItem(`showCode6`),
            first2: localStorage.getItem(`showCode7`),
            second1: localStorage.getItem(`showCode26`),
            second2: localStorage.getItem(`showCode27`),
            third1: localStorage.getItem(`showCode46`),
            third2: localStorage.getItem(`showCode47`),
            fourth1: localStorage.getItem(`showCode66`),
            fourth2: localStorage.getItem(`showCode67`)
        }
    }, {
        name: "วิทยาศาสตร์",
        code: "05",
        day: {
            first1: localStorage.getItem(`showCode8`),
            first2: localStorage.getItem(`showCode9`),
            second1: localStorage.getItem(`showCode28`),
            second2: localStorage.getItem(`showCode29`),
            third1: localStorage.getItem(`showCode48`),
            third2: localStorage.getItem(`showCode49`),
            fourth1: localStorage.getItem(`showCode68`),
            fourth2: localStorage.getItem(`showCode69`)
        }
    }, {
        name: "รัฐศาสตร์",
        code: "06",
        day: {
            first1: localStorage.getItem(`showCode10`),
            first2: localStorage.getItem(`showCode11`),
            second1: localStorage.getItem(`showCode30`),
            second2: localStorage.getItem(`showCode31`),
            third1: localStorage.getItem(`showCode50`),
            third2: localStorage.getItem(`showCode51`),
            fourth1: localStorage.getItem(`showCode70`),
            fourth2: localStorage.getItem(`showCode71`)
        }
    },
    {
        name: "เศรษฐศาสตร์",
        code: "07",
        day: {
            first1: localStorage.getItem(`showCode12`),
            first2: localStorage.getItem(`showCode13`),
            second1: localStorage.getItem(`showCode32`),
            second2: localStorage.getItem(`showCode33`),
            third1: localStorage.getItem(`showCode52`),
            third2: localStorage.getItem(`showCode53`),
            fourth1: localStorage.getItem(`showCode72`),
            fourth2: localStorage.getItem(`showCode73`)
        }
    }, {
        name: "สื่อสารมวลชน",
        code: "54",
        day: {
            first1: localStorage.getItem(`showCode14`),
            first2: localStorage.getItem(`showCode15`),
            second1: localStorage.getItem(`showCode34`),
            second2: localStorage.getItem(`showCode35`),
            third1: localStorage.getItem(`showCode54`),
            third2: localStorage.getItem(`showCode55`),
            fourth1: localStorage.getItem(`showCode74`),
            fourth2: localStorage.getItem(`showCode75`)
        }
    }, {
        name: "พัฒนาทรัพยากรมนุษย์",
        code: "56",
        day: {
            first1: localStorage.getItem(`showCode16`),
            first2: localStorage.getItem(`showCode17`),
            second1: localStorage.getItem(`showCode36`),
            second2: localStorage.getItem(`showCode37`),
            third1: localStorage.getItem(`showCode56`),
            third2: localStorage.getItem(`showCode57`),
            fourth1: localStorage.getItem(`showCode76`),
            fourth2: localStorage.getItem(`showCode77`)
        }
    }, {
        name: "PRE-DEGREE",
        code: "90",
        day: {
            first1: localStorage.getItem(`showCode18`),
            first2: localStorage.getItem(`showCode19`),
            second1: localStorage.getItem(`showCode38`),
            second2: localStorage.getItem(`showCode39`),
            third1: localStorage.getItem(`showCode58`),
            third2: localStorage.getItem(`showCode59`),
            fourth1: localStorage.getItem(`showCode78`),
            fourth2: localStorage.getItem(`showCode79`)
        }
    }
];

const getLocal = {
    first: localStorage.getItem(`showDate0`),
    second: localStorage.getItem(`showDate1`),
    third: localStorage.getItem(`showDate2`),
    fourth: localStorage.getItem(`showDate3`)
};

const termFee = {
    credit: {
        normal: 25,
        predegree: 50
    },
    majorTerm: {
        ramNews: 100,
        normal: {
            Fee60: 800,
            Fee55: 500,
            Fee54: 300
        },
        predegree: {
            Fee60: 500,
            Fee54: 300
        }
    },
    summerTerm: {
        ramNews: 0,
        normal: {
            Fee60: 500,
            Fee55: 300,
            Fee54: 200
        },
        predegree: {
            Fee60: 300,
            Fee54: 200
        }
    },
    repairTerm: {
        ramNews: 0,
        normal: {
            Fee60: 200,
            Fee55: 200,
            Fee54: 200
        },
        predegree: {
            Fee60: 200,
            Fee54: 200
        }
    }
};

const DOM = {
    selectDate: document.querySelector('select#regis_date'),
    selectColor: document.querySelectorAll('option.color'),
    inputAll: document.querySelectorAll('table input'),
    inputMix: document.querySelectorAll('table input, select#regis_date'),
    ramID: document.querySelectorAll('.ramid'),
    credit: document.querySelectorAll('.credit'),
    regisdate: document.querySelectorAll('.regisdate'),
    datefee: document.querySelectorAll('.datefee'),
    keepcost: document.querySelectorAll('.keepcost'),
    total: document.querySelectorAll('.total'),
    grandTotal: document.querySelector('.grandtotal'),
    btnPrint: document.querySelector('#save'),
    btnReset: document.querySelector('#clear'),
    term: document.querySelector('span.thisterm')
};

const styleColor = ["red", "blue", "green", "0C090A"];

(() => {
    if (localStorage && DOM.selectColor.length > 0) {
        if (DOM.term.innerHTML === "ซ่อม") {
            DOM.selectColor[0].innerHTML = getLocal.first;
            DOM.selectColor[0].style.color = styleColor[0];
            DOM.selectColor[1].innerHTML = getLocal.second;
            DOM.selectColor[1].style.color = styleColor[1];
            DOM.selectColor[2].innerHTML = getLocal.third;
            DOM.selectColor[2].style.color = styleColor[2];
        } else {
            DOM.selectColor[0].innerHTML = getLocal.first;
            DOM.selectColor[0].style.color = styleColor[0];
            DOM.selectColor[1].innerHTML = getLocal.second;
            DOM.selectColor[1].style.color = styleColor[1];
            DOM.selectColor[2].innerHTML = getLocal.third;
            DOM.selectColor[2].style.color = styleColor[2];
            DOM.selectColor[3].innerHTML = getLocal.fourth;
            DOM.selectColor[3].style.color = styleColor[3];
        }
    }
})();

const processing = () => {
    DOM.selectDate.addEventListener('change', () => {
        DOM.selectColor.forEach((c, i) => {
            if (c.selected) {
                DOM.selectDate.style.color = styleColor[i];
            }
        });

    });
    DOM.ramID.forEach((el, i) => {
        el.addEventListener('change', () => {
            if (el.value.length > 0 && el.value.length !== 10) {
                swal({
                    title: "รหัสนักศึกษาไม่ครบ 10 หลัก!",
                    icon: "warning",
                    button: "ตกลง",
                }).then((value) => {
                    el.focus();
                });
            }
        });
        el.addEventListener('keypress', e => {
            if (e.which === 13 || e.keycode === 13) {
                DOM.credit[i].focus();
            }
        });
    });
    DOM.credit.forEach((el, i) => {
        el.addEventListener('keypress', e => {
            if (e.which === 13 || e.keycode === 13) {
                if (DOM.credit[i] !== DOM.credit[DOM.credit.length - 1]) {
                    DOM.ramID[i + 1].focus();
                } else {
                    DOM.btnPrint.focus();
                }
            }
        });
    });
    DOM.btnPrint.addEventListener('click', () => {
        window.print();
    });
    DOM.btnReset.addEventListener('click', () => {
        DOM.inputAll.forEach(ie => {
            ie.value = "";
        });
        //location.reload();
        DOM.inputAll[0].focus();
    });
}

const calculate = () => {
    //total
    DOM.inputMix.forEach((el) => {
        el.addEventListener('change', () => {
            let sum = 0,
                total;
            DOM.regisdate.forEach((rd, k) => {
                if (DOM.ramID[k].value !== '' && rd.value === '') {
                    return;
                } else if (DOM.ramID[k].value !== '' && rd.value !== DOM.selectDate.options[DOM.selectDate.selectedIndex].text) {
                    DOM.datefee[k].value = 30;
                } else if (DOM.ramID[k].value !== '' && rd.value === DOM.selectDate.options[DOM.selectDate.selectedIndex].text) {
                    DOM.datefee[k].value = "";
                }
            });
            DOM.total.forEach((ti = 0, i) => {
                if (DOM.ramID[i].value.length === 10) {
                    if (DOM.term.innerHTML === "1-2") {
                        if (DOM.ramID[i].value.slice(2, 4) !== facultyCode[9].code) {
                            if (DOM.ramID[i].value.slice(0, 2) >= "60" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.majorTerm.ramNews + termFee.majorTerm.normal.Fee60 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) >= "55" && DOM.ramID[i].value.slice(0, 2) <= "59" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.majorTerm.ramNews + termFee.majorTerm.normal.Fee55 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) <= "54" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.majorTerm.ramNews + termFee.majorTerm.normal.Fee54 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            }
                        } else {
                            if (DOM.ramID[i].value.slice(0, 2) >= "60" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.predegree) + termFee.majorTerm.ramNews + termFee.majorTerm.predegree.Fee60 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) <= "54" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.predegree) + termFee.majorTerm.ramNews + termFee.majorTerm.predegree.Fee54 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            }
                        }
                    }
                    if (DOM.term.innerHTML === "Summer") {
                        if (DOM.ramID[i].value.slice(2, 4) !== facultyCode[9].code) {
                            if (DOM.ramID[i].value.slice(0, 2) >= "60" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.summerTerm.ramNews + termFee.summerTerm.normal.Fee60 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) >= "55" && DOM.ramID[i].value.slice(0, 2) <= "59" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.summerTerm.ramNews + termFee.summerTerm.normal.Fee55 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) <= "54" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.summerTerm.ramNews + termFee.summerTerm.normal.Fee54 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            }
                        } else {
                            if (DOM.ramID[i].value.slice(0, 2) >= "60" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.predegree) + termFee.summerTerm.ramNews + termFee.summerTerm.predegree.Fee60 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) <= "54" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.predegree) + termFee.summerTerm.ramNews + termFee.summerTerm.predegree.Fee54 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            }
                        }
                    }
                    if (DOM.term.innerHTML === "ซ่อม") {
                        if (DOM.ramID[i].value.slice(2, 4) !== facultyCode[9].code) {
                            if (DOM.ramID[i].value.slice(0, 2) >= "60" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.repairTerm.ramNews + termFee.repairTerm.normal.Fee60 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) >= "55" && DOM.ramID[i].value.slice(0, 2) <= "59" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.repairTerm.ramNews + termFee.repairTerm.normal.Fee55 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) <= "54" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.normal) + termFee.repairTerm.ramNews + termFee.repairTerm.normal.Fee54 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            }
                        } else {
                            if (DOM.ramID[i].value.slice(0, 2) >= "60" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.predegree) + termFee.repairTerm.ramNews + termFee.repairTerm.predegree.Fee60 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            } else if (DOM.ramID[i].value.slice(0, 2) <= "54" && DOM.credit[i].value !== "") {
                                total = (parseInt(DOM.credit[i].value) * termFee.credit.predegree) + termFee.repairTerm.ramNews + termFee.repairTerm.predegree.Fee54 +
                                    parseInt(DOM.datefee[i].value || 0) + parseInt(DOM.keepcost[i].value || 0);
                                ti.value = total.toLocaleString();
                            }
                        }
                    }
                }

                if (ti.value !== '') {
                    sum += parseInt(ti.value.replace(',', '') || 0, 10);
                    DOM.grandTotal.value = sum.toLocaleString();
                }

            });
        });
    });

    //register day
    DOM.ramID.forEach((el, i) => {
        el.addEventListener('change', () => {
            if (el.value.length < 10) {
                DOM.datefee[i].value = "";
                DOM.keepcost[i].value = "";
                DOM.total[i].value = "";
                let b = 0;
                DOM.total.forEach(v => {
                    b += parseInt(v.value.replace(',', '') || 0, 10);
                    DOM.grandTotal.value = b.toLocaleString();
                });
            }
            if (el.value.slice(2, 4) === facultyCode[0].code) {
                if (el.value >= facultyCode[0].day.first1 && el.value <= facultyCode[0].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[0].day.second1 && el.value <= facultyCode[0].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[0].day.third1 && el.value <= facultyCode[0].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[0].day.fourth1 && el.value <= facultyCode[0].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[1].code) {
                if (el.value >= facultyCode[1].day.first1 && el.value <= facultyCode[1].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[1].day.second1 && el.value <= facultyCode[1].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[1].day.third1 && el.value <= facultyCode[1].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[1].day.fourth1 && el.value <= facultyCode[1].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[2].code) {
                if (el.value >= facultyCode[2].day.first1 && el.value <= facultyCode[2].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[2].day.second1 && el.value <= facultyCode[2].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[2].day.third1 && el.value <= facultyCode[2].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[2].day.fourth1 && el.value <= facultyCode[2].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[3].code) {
                if (el.value >= facultyCode[3].day.first1 && el.value <= facultyCode[3].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[3].day.second1 && el.value <= facultyCode[3].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[3].day.third1 && el.value <= facultyCode[3].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[3].day.fourth1 && el.value <= facultyCode[3].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[4].code) {
                if (el.value >= facultyCode[4].day.first1 && el.value <= facultyCode[4].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[4].day.second1 && el.value <= facultyCode[4].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[4].day.third1 && el.value <= facultyCode[4].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[4].day.fourth1 && el.value <= facultyCode[4].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[5].code) {
                if (el.value >= facultyCode[0].day.first1 && el.value <= facultyCode[5].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[5].day.second1 && el.value <= facultyCode[5].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[5].day.third1 && el.value <= facultyCode[5].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[5].day.fourth1 && el.value <= facultyCode[5].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[6].code) {
                if (el.value >= facultyCode[6].day.first1 && el.value <= facultyCode[6].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[6].day.second1 && el.value <= facultyCode[6].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[6].day.third1 && el.value <= facultyCode[6].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[6].day.fourth1 && el.value <= facultyCode[6].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[07].code) {
                if (el.value >= facultyCode[7].day.first1 && el.value <= facultyCode[7].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[7].day.second1 && el.value <= facultyCode[7].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[7].day.third1 && el.value <= facultyCode[7].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[7].day.fourth1 && el.value <= facultyCode[7].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[8].code) {
                if (el.value >= facultyCode[8].day.first1 && el.value <= facultyCode[8].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[8].day.second1 && el.value <= facultyCode[8].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[8].day.third1 && el.value <= facultyCode[8].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[8].day.fourth1 && el.value <= facultyCode[8].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
            if (el.value.slice(2, 4) === facultyCode[9].code) {
                if (el.value >= facultyCode[9].day.first1 && el.value <= facultyCode[9].day.first2) {
                    DOM.regisdate[i].value = DOM.selectColor[0].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[0];
                } else if (el.value >= facultyCode[9].day.second1 && el.value <= facultyCode[9].day.second2) {
                    DOM.regisdate[i].value = DOM.selectColor[1].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[1];
                } else if (el.value >= facultyCode[9].day.third1 && el.value <= facultyCode[9].day.third2) {
                    DOM.regisdate[i].value = DOM.selectColor[2].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[2];
                } else if (el.value >= facultyCode[9].day.fourth1 && el.value <= facultyCode[9].day.fourth2) {
                    DOM.regisdate[i].value = DOM.selectColor[3].innerHTML;
                    DOM.regisdate[i].style.color = styleColor[3];
                } else {
                    DOM.regisdate[i].value = "";
                }
            }
        });
    });
}

processing();
calculate();