class UsersController < ApplicationController
    
    def index
        user = User.all
        render json: user
    end

    def create 
        user = User.create(user_params)
        if user.valid?
            payload = {user_id: user.id}
            token = encode_token(payload)
            render json: {user: user, jwt: token}, status: :created
        else
            render json: {errors: user.errors.full_messages}
        end
    end

    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

end