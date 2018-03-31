class LocationData {
    constructor (Model) {
        this.Model = Model;
    }

    createLocation(locationObj) {
        const result = this.Model.create({
            name: locationObj.name,
            address: locationObj.address,
            CityId: locationObj.cityId.id,
        });

        return result;
    }
}

module.exports = LocationData;
