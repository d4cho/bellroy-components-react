export const numberWithCommas = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const isValid = (regex, string) => {
    return new RegExp(regex).test(string);
};
