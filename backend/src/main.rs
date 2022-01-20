#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> String {
    format!("Hello world!")
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/", routes![index])
}
