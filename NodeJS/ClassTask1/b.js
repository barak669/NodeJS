function month() {
    m = new Date();
    return m.getMonth()+1;
}

module.exports={
    addFuncMonth:month
};