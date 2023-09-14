const matiasRoute = (req, res) => {
    res.send("My husband is Matias Mansilla");
  }
const lindaRoute = (req, res) => {
    res.send("My Sister is Linda Cardona");
  }
const virginiaRoute = (req, res) => {
    res.send("My mom is Virginia Guzman");
  }

module.exports ={
    matiasRoute,
    lindaRoute,
    virginiaRoute
}