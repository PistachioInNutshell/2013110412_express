exports.index = (req, res, next) => {
    res.status(200).json(
      {fullname: 'Kittinan Kampusa'})
  }

exports.bio = (req, res, next) => {
    res.status(200).json(
      {fullname : 'Kittinan Kampusa',
      nickname  : 'Nun',
      hobby     : 'Gaming',
      gitusername : 'PistachioInNutshell'})
  }