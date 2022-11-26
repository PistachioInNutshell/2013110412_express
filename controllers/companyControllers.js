const companies = [
    { id: 0, name: "TNI", address: { province: "Bangkok", postcode: "10250" } },
    { id: 1, name: "RIOT", address: { province: "Taiwan", postcode: "999077" } },
    {
      id: 2,
      name: "Hoyoverse",
      address: { province: "Singapore", postcode: "546080" },
    },
  ];
  
  const company = (req, res, next) => {
    return res.status(200).json({ data: companies });
  };
  module.exports = { company: company };
