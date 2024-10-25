hostname='localhost';
port=3307;
user='root';
password='';
db='icecream';

let con=sql.createConnection({
    host:hostname,port:port,user:user,password:password,database:db
})
con.connect(function(err){
    if(err)console.log(err);
    else
    console.log("conneted");
})
export default con;