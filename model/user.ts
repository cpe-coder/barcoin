import mongoose, { Model, Schema } from "mongoose";

interface IUser extends Document {
	id: "string";
	email: string;
	password?: string;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: false,
	},
});

const User: Model<IUser> =
	mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
