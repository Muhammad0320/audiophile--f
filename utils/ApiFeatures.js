class ApiFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filter() {
    let queryObj = { ...this.queryString };

    const excludedFields = ['fields', 'limit', 'page', 'sort'];

    excludedFields.forEach((el) => delete queryObj[el]);

    // Advanced Filtering

    let queryStr = JSON.stringify(queryObj).replace(
      /\b(lt|lte|gt|gte)\b/g,
      (match) => `$${match}`
    );

    queryStr = JSON.parse(queryStr);

    this.query = this.query.find(queryStr);

    return this;
  }

  sort() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.replaceAll(',', ' ');

      this.query = this.query.sort(sortBy);
    }

    return this;
  }
}

module.exports = ApiFeatures;
