class ApplicationController < ActionController::API

    def encode_token(payload)
        JTW.encode(payload, 'my_secrect')
    end

    def auth_header
        request.header['Authorization']
    end

    def decoded_token
        if auth_header
            token = auth_header.split(' ')[1]
            begin
                JWT.decode(token, 'my_secrect', true, algorithm: 'HS256')
            rescue JWT::DecodeError
                nill
            end
        end
    end

end
