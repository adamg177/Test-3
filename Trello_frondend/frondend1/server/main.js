import '../imports/api/fixtures'
import '../imports/api/methods'
import '../imports/api/publications'
import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
const bcrypt = require ('bcrypt');

const SEED_USERNAME = 'Mateusz1'
const SEED_PASSWORD = 'Passwor'
const Array_to_do = [];
const Array_in_proccesing = [];
const Array_done = [];


const saltRounds = 10;

function insertLink({ name, password, Array_to_do, Array_in_proccesing, Array_done }) 
{
  LinksCollection.insert({name, password, Array_to_do, Array_in_proccesing, Array_done});
}



function comparePassword(username, password)
{
  if (LinksCollection.find({ name: username }).count() < 1)
  {
    console.log("Nie istnieje uzytkownik o takim loginie. Zarejestruj sie");
    return false;
  }

  const hashDB = LinksCollection.find({ name: username }).fetch();

  console.log(hashDB[0].password);
  result =  bcrypt.compareSync(password, hashDB[0].password);
  
    if (result) 
    {
        console.log("Password correct");
    } else 
    {
        console.log("Password wrong");
    }

    return result;
}

function registration()
{
    if (LinksCollection.find({ name: SEED_USERNAME }).count() < 1)
    {
        password = passwordToHash(SEED_PASSWORD);
        insertLink(
        {
        name: SEED_USERNAME,
        password: password,
        Array_to_do: Array_to_do,
        Array_in_proccesing: Array_in_proccesing,
        Array_done: Array_done
        });
    }
    else
    {
        console.log("Istnieje taka nazwa uzytkownika");
    }
}

Meteor.startup(() => {

  //console.log(LinksCollection.find({ name: SEED_USERNAME }).fetch());
  //registration();


  console.log(comparePassword(SEED_USERNAME, SEED_PASSWORD));
});
