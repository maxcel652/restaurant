import express from 'express'
import cors from "cors"
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'

const app = express()

const port = process.env.PORT || 4000

connectDB()
connectCloudinary()

app.use(cors())
app.use(express.json())
app.use('/api/user', userRouter)

app.get('/', (req, res)=>{
    res.send('API Workiing')
})

app.listen(port, ()=> console.log('Server started on port ' + port))