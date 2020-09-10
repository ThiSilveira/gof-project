function Shop() {
    this.construct = (builder) => {
        builder.step1();
        builder.step2();
        return builder.get();
    }
}

module.exports = Shop;