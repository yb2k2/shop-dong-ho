import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

async function connectDB(){

    // Ket noi mongodb tren may
    const url = "mongodb+srv://admin:admin123@dongho.9ynz9pd.mongodb.net/user?retryWrites=true&w=majority&appName=dongho"


    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        console.log("Đã kết nối tới mongodb thành công - shop TTT")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB;