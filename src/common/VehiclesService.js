import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, query, where } from "firebase/firestore";
import { collection, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLufhQNdzksGdDmYh4zfTFS_MjbEgbqzA",
  authDomain: "rent-a-car-70c7a.firebaseapp.com",
  projectId: "rent-a-car-70c7a",
  storageBucket: "rent-a-car-70c7a.appspot.com",
  messagingSenderId: "860450124585",
  appId: "1:860450124585:web:a60d7e294a1944d1bebd38",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

class VehiclesService {
  getAllVehicles = async (brand, price) => {
    let vehiclesCollection = collection(db, "vehicles");

    let q = query(vehiclesCollection);

    if (brand != "any") {
      q = query(vehiclesCollection, where("brand", "==", brand));
    }

    let querySnapshot = await getDocs(q);
    let vehicles = [];

    querySnapshot.forEach(doc => {
      vehicles.push(doc.data());
    });

    console.log(price);

    if (price != "any") {
      if (price === "lth") {
        vehicles = vehicles.sort((a, b) => {
          console.log(a.price);
          return a.price - b.price;
        });
      } else {
        vehicles = vehicles.sort((a, b) => {
          return b.price - a.price;
        });
      }
    }

    return vehicles;
  };
}

export default new VehiclesService();
