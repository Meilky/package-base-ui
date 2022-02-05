use rocket::serde::json::Json;
use serde::{Serialize,Deserialize};

#[macro_use] extern crate rocket;

#[derive(Serialize, Deserialize)]
struct Package {
    name: String,
    description: String,
}

#[get("/")]
fn index() -> Json<Package> {
    let package: Package = Package {
        name: String::from("lol"),
        description: String::from("kalsfdjlaskj")
    };

    Json(package)
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/api", routes![index])
}
