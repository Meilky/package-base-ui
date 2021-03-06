use std::path::Path;

use rocket::serde::json::Json;
use serde::{Serialize,Deserialize};
use dotenv;
use std::env;

#[macro_use] extern crate rocket;

#[derive(Serialize, Deserialize)]
struct Package {
    name: String,
    description: String,
}

#[get("/")]
fn index() -> Json<Vec<Package>> {
    let mut vec: Vec<Package> = Vec::new();

    let package1: Package = Package {
        name: String::from("package 1"),
        description: String::from("description package 1")
    };

    let package2: Package = Package {
        name: String::from("package 2"),
        description: String::from("description package 2")
    };

    let package3: Package = Package {
        name: String::from("package 3"),
        description: String::from("description package 3")
    };

    vec.push(package1);
    vec.push(package2);
    vec.push(package3);

    Json(vec)
}

#[launch]
fn rocket() -> _ {
    for argument in env::args() {
        println!("{}", argument);
    }
    dotenv::from_path(Path::new("/etc/pkgui-server/pkgui-server.env")).expect("/etc/pkgui-server/pkgui-server.env file not found");
    rocket::build().mount("/api", routes![index])
}
