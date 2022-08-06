class ApplicationController < ActionController::API

    def encode_token(payload)
        JTW.encode(payload, 'my_secrect')
    end

    def auth_header
        request.header['Authorization']
    end

end
