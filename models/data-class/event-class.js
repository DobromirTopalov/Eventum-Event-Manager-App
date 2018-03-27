class Event{
    constructor(date, coverPhoto, location_country, location_city, location_address, title, description, category, prices) {
      this.setDate(date);
      this.setCoverPhoto(coverPhoto);
      this.setLocationParams(location_country, 'country');
      this.setLocationParams(location_city, 'city');
      this.setLocationParams(location_address, 'address');
      this.setTitle(title);
      this.setDescription(description);
      this.setCategory(category);
      this.setPrices(prices);
    }
    setDate(date) {
        date = date.trim();
        const dateReg = /^\d{2}([./-])\d{2}\1\d{4}$/;

        if (!date.length
            || !date
            || (date.length > 11)
            || (date.length < 4)
        ) {
            return null;
        }
        if (date.match(dateReg)) {
          this.date = date;
      }
        this.date = date;
    }
    setLocationParams(input, attr) {
        input = input.trim();
        const alphaRegex = /^[a-zA-Z]+$/;
        
        if (!input.length
            || !input
            || (input.length > 100)
        ) {
            return null;
        }
        if (input.match(alphaRegex)) {
            if (attr === 'country')
                this.location_country = input;
            else if (attr === 'city')
                this.location_city = input;
            else if (attr === 'address')
                this.location_address = input;
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
      const titleRegex = /^[a-zA-Z]+$/;
  
      if (!title.length
          || !title
          || (title.length > 100)
      ) {
          return null;
      }

      if (title.match(titleRegex)) {
          this.title = title;
      }
    }
    setDescription(description) {
        description = description.trim();

        if (!description.length
            || !description
            || (description.length > 8000)
        ) {
            return null;
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
          return null;
      }

      if (prices.match(priceRegex)) {
          this.prices = prices;
      }
    }


  getDate() {
    return this.date;
  }
  getCoverPhoto() {
      return this.coverPhoto;
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
      return this.description;
  }
  getCategory() {
      return this.category;
  }
  getPrices() {
      return this.prices;
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