import AdminModel from "../modals/adminModel.js";
import SellerModel from "../modals/sellerModal.js";
import bcrypt from "bcrypt";
import { createToken } from "../utiles/tokenCreate.js";
import { responseReturn } from "../utiles/responseReturn.js";

class authControllers {
  admin_login = async (req, res) => {
    // login logic
    const { email } = req.body; // get email and password from req.body
    try {
      const admin = await AdminModel.findOne(
        { email },
        { email: 1, password: 1, role: 1 }
      ); // find admin by email

      const { password } = req.body; // get password from req.body

      if (admin) {
        // check if admin exists and password is correct
        if (!(await bcrypt.compare(password, admin.password))) {
          return responseReturn(res, 400, {
            status: "error",
            message: "Invalid Password",
          });
        }

        // jwt.sign(payload, secret, { expiresIn: '7d' });
        const token = await createToken({
          id: admin._id,
          role: admin.role,
          email: admin.email,
        }); // create token

        // Sets a cookie in the response header (does not send the response).
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        return responseReturn(res, 200, {
          status: "success",
          message: "User logged in successfully",
          token,
        });
      } else {
        // if admin email not exists
        return responseReturn(res, 400, {
          status: "error",
          message: "Invalid Email Id",
        });
      }
    } catch (error) {
      console.log(error);
      return responseReturn(res, 500, {
        status: "error",
        error: error.message,
        message: "An error occurred while processing your request.",
      }); // Send error response
    }
  };
  seller_login = async (req, res) => {
    // login logic
    const { email } = req.body; // get email and password from req.body

    try {
      const admin = await SellerModel.findOne(
        { email },
        { email: 1, password: 1, role: 1 }
      ); // find admin by email

      const { password } = req.body; // get password from req.body

      if (admin) {
        // check if admin exists and password is correct
        if (!(await bcrypt.compare(password, admin.password))) {
          return responseReturn(res, 400, {
            status: "error",
            message: "Invalid Password",
          });
        }

        // jwt.sign(payload, secret, { expiresIn: '7d' });
        const token = await createToken({
          id: admin._id,
          role: admin.role,
          email: admin.email,
        }); // create token

        // Sets a cookie in the response header (does not send the response).
        res.cookie("accessToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        });

        return responseReturn(res, 200, {
          status: "success",
          message: "User logged in successfully",
          token,
        });
      } else {
        // if admin email not exists
        return responseReturn(res, 400, {
          status: "error",
          message: "Invalid Email Id",
        });
      }
    } catch (error) {
      console.log(error);
      return responseReturn(res, 500, {
        status: "error",
        error: error.message,
        message: "An error occurred while processing your request.",
      }); // Send error response
    }
  };
  admin_register = async (req, res) => {
    // register logic

    const { name, role, image, email, password } = req.body; // get email and password from req.body

    try {
      // check if already exists
      let user = await AdminModel.findOne({ email }); // find user by email
      if (user) {
        // check if user already exists
        return responseReturn(res, 400, {
          status: "error",
          message: "User already exists",
        }); // Send error response
      }

      // hash password
      const salt = await bcrypt.genSalt(10); // generate salt
      const hashedPassword = await bcrypt.hash(password, salt); // hash password

      // create user
      user = new AdminModel({
        name,
        email,
        password: hashedPassword,
      }); // create user

      // save user
      await user.save(); // save user

      // create token
      const token = await createToken({ id: user._id }); // create token

      // send response
      return responseReturn(res, 201, {
        success: true,
        message: "user registration successfull",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      return responseReturn(res, 500, {
        status: "error",
        error: error.message,
        message: "An error occurred while processing your request.",
      }); // Send error response
    }
  };
  seller_register = async (req, res) => {
    // register logic

    const { name, email, password, method } = req.body; // get email and password from req.body

    try {
      // check if already exists
      let user = await SellerModel.findOne({ email }); // find user is exist
      if (user) {
        return responseReturn(res, 400, {
          status: "error",
          message: "seller email already exists",
        });
      }
      // hash password
      const salt = await bcrypt.genSalt(10); // generate salt
      const hashedPassword = await bcrypt.hash(password, salt); // hash password

      // create user
      user = new SellerModel({
        name,
        email,
        password: hashedPassword,
        method,
      }); // create user

      // save user
      await user.save(); // save user

      // create token
      const token = await createToken({ id: user._id }); // create token

      // send response
      return responseReturn(res, 201, {
        success: true,
        message: "seller registration successfull",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          method: user.method,
        },
        token,
      });
    } catch (error) {
      console.log(error);
      return responseReturn(res, 500, {
        status: "error",
        error: error.message,
        message: "An error occurred while processing your request.",
      }); // Send error response
    }
  };

  get_user = async (req, res) => {
    const { id, role } = req;
    // if forgot to add payload, or claim
    if (!id || !role) {
      return responseReturn(res, 422, {
        status: "error",
        error: "Unprocessable Entity",
        message:
          "The provided JWT token is missing required claims or contains invalid values.",
      });
    }

    // register logic
    try {
      let user;
      // fetch new updated database data (double security to confirm if state is same)
      if (role === "admin") {
        user = await AdminModel.findById(id, { password: 0 }); // get all users
      }
      if (role === "seller") {
        user = await SellerModel.findById(id, { password: 0 });
      }

      // Check if the user exists and has the 'admin' role
      if (!user || user.role !== role) {
        return responseReturn(res, 403, {
          status: "error",
          message: "Access denied. Admin privileges required.",
        });
      }

      // Return the admin user details
      return responseReturn(res, 201, user);
    } catch (error) {
      console.log(error);
      responseReturn(res, 500, {
        status: "error",
        error: error.message,
        message:
          "An error occurred while processing your request to fetch authentication data from database.",
      });
    }
  };

  logout = async (req, res) => {
    try {
      res.cookie("accessToken", null, {
        httpOnly: "true",
        expires: new Date(Date.now()),
      });

      responseReturn(res, 200, {
        status: "success",
        message: "User Logout Successfully",
        role: "",
      });
    } catch (error) {
      responseReturn(res, 500, {
        status: "error",
        error: error.message,
        message: "Server Error you request cannot be fullfilled",
      });
    }
  };
}

export default new authControllers();
