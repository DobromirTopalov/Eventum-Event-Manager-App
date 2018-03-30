class Event {
    constructor(date = '', coverPhoto = '', location_country = '', location_city = '', location_address = '',
        title = '', description = '', category = '', prices = '', capacity = '') {

        this.setDate(date);

        // if(location_country.length>0) {
        // this.setLocationParams(location_country, 'country');
        // }
        if (location_city.length > 0) {
            this.setLocationParams(location_city, 'city');
        }
        if (location_address.length > 0) {
            this.setLocationParams(location_address, 'address');
        }
        if (title.length > 0) {
            this.setTitle(title);
        }

        this.setDescription(description);
        if (capacity.length > 0) {
            this.setCapacity(capacity);
        }

        //   this.setCategory(category);
        if (prices.length > 0) {
            this.setPrices(prices);
        }
        //   this.setCoverPhoto(coverPhoto);
    }
    setDate(date) {
        date = date.trim();
        const dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/;
        if (!date.length
            || !date
            || (date.length > 11)
            || (date.length < 4)
        ) {

            throw new Error('Please add a date in the required format');
        }
        if (date.match(dateReg)) {
            this.date = date;
        } else {
            throw new Error('Date is not in the required format');
        }
    }
    setLocationParams(input, attr) {
        input = input.trim();
        const alphaRegex = /^[a-zA-Z]+$/;

        if (!input.length
            || !input
            || (input.length > 100)
        ) {
            throw new Error(`${attr} name is too long`);
        }
        if (input.match(alphaRegex)) {
            if (attr === 'country')
                this.location_country = input;
            else if (attr === 'city')
                this.location_city = input;
            else if (attr === 'address')
                this.location_address = input;
        } else {
            throw new Error(`${attr} name has invalid symbols`);
        }
    }
    setCoverPhoto(coverPhoto) {
        coverPhoto = coverPhoto.trim();
        const urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

        if (!coverPhoto.length
            || !coverPhoto
        ) {
            return null;
        }

        if (coverPhoto.match(urlRegex)) {
            this.coverPhoto = coverPhoto;
        }
    }

    setTitle(title) {
        title = title.trim();
        const symbolRestrictRegex = /[!$%^&*()+|~=`{}\[\]:";'<>?,.\/]/;
        const titleRegex = /^[a-zA-Z ]*$/;

        if (!title.length
            || !title
            || (title.length > 100)
        ) {
            throw new Error('Title is of invalid length');
        }

        if (title.match(titleRegex)) {
            this.title = title;
        } else {
            throw new Error('Title should include only letters');
        }
    }

    setDescription(description) {
        description = description.trim();

        if (!description.length
            || !description
            || (description.length > 8000)
        ) {
            throw new Error('Description is of invalid length');
        }

        this.description = description;
    }
    setCategory(category) {
        category = category.trim();
        const nameRegex = /^[a-zA-Z ]{1,30}$/;

        if (!category.length
            || !category
            || (category.length > 100)
        ) {
            return null;
        }

        if (category.match(nameRegex)) {
            this.category = category;
        }
    }
    setPrices(prices) {
        const priceRegex = /^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/;

        if (!prices.length
            || !prices
            || (prices.length > 12)
        ) {
            throw new Error('Price is too big');
        }

        if (prices.match(priceRegex)) {
            this.prices = prices;
        } else {
            throw new Error('Price is not of valid format');
        }
    }
    setCapacity(capacity) {
        const capacityRegex = /^[a-zA-Z ]{1,30}$/;

        if (!capacity.length
            || !capacity
            || (capacity.length > 12)
        ) {
            throw new Error('Capacity is too big');
        }

        if (capacity.match(capacityRegex)) {
            this.capacity = capacity;
        } else {
            throw new Error('Capacity is not of valid format');
        }
    }


    getDate() {
        let dateFormatted = this.date.split('/')
        console.log(dateFormatted)
        let finalDate = new Date();
        finalDate.setMonth(dateFormatted[0] - 1);
        finalDate.setDate(dateFormatted[1]);
        finalDate.setFullYear(dateFormatted[2]);
        return finalDate;
    }
    getCoverPhoto() {
        return this.coverPhoto || null;
    }
    getCountry() {
        return this.location_country;
    }
    getCity() {
        return this.location_city;
    }
    getAddress() {
        return this.location_address;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description || null;
    }
    getCategory() {
        return this.category || null;
    }
    getPrices() {
        return this.prices || null;
    }
    getCapacity() {
        return this.capacity || null;
    }
    getAllInfo() {
        return {
            'date': this.getDate(),
            'coverPhoto': this.getCoverPhoto(),
            'country': this.getCountry(),
            'city': this.getCity(),
            'address': this.getAddress(),
            'title': this.getTitle(),
            'description': this.getDescription(),
            'category': this.getCategory(),
            'prices': this.getPrices(),
        };
    }
}

module.exports = Event;