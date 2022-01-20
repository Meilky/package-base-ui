use actix_web::Responder;

pub async fn slash() -> impl Responder {
    format!("ok")
}
