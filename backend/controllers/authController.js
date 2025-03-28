import Admin from '../modals/adminModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

class authControllers {
  admin_login = async (req, res) => {
    // login logic
    const { email } = req.body; // get email and password from req.body
    try {
      const user = await Admin.findOne({ email }); // find user by email

      const { password } = req.body; // get password from req.body
      // check if user exists and password is correct
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res
          .status(400)
          .json({ status: 'error', message: 'Invalid credentials' }); // Send error response
      } // check if user exists and password is correct

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      }); // create token

      res.status(200).json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role
        },
        status: 'success',
        message: 'User logged in successfully',
        token,
      });   // send response
    


    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: 'An error occurred while processing your request.' }); // Send error response
    }
  };
  admin_register = async (req, res) => {
    // register logic
    const { name, role, image, email, password } = req.body; // get email and password from req.body
    try {
      // check if already exists
      let user = await Admin.findOne({ email }); // find user by email
      if (user) {
        // check if user already exists
        return res
          .status(400)
          .json({ status: 'error', message: 'User already exists' }); // Send error response
      }

      // hash password
      const salt = await bcrypt.genSalt(10); // generate salt
      const hashedPassword = await bcrypt.hash(password, salt); // hash password

      // create user
      user = new Admin({
        name,
        role,
        image,
        email,
        password: hashedPassword,
      }); // create user

      // save user
      await user.save(); // save user

      // create token
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      }); // create token

      // send response
      res.status(201).json({
        success: true,
        message: 'User registered successfully',
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        status: 'error',
        message: 'An error occurred while processing your request.',
      }); // Send error response
    }
  };
  admin_users = async (req, res) => {
    // register logic
    try {
      const response = await Admin.find(); // get all users
      console.log(response); //admin users
      res.status(201).json(response);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ error: 'An error occurred while processing your request.' }); // Send error response
    }
  };
}

export default new authControllers();
