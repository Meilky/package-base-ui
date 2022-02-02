#[macro_use] extern crate rocket;

#[get("/")]
fn index() -> String {
    format!("Hello world! big brain")
}

#[launch]
fn rocket() -> _ {
    rocket::build().mount("/api", routes![index])
}
