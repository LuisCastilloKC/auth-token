class ApplicationController < ActionController::API

    def encode_token(payload)
        JTW.encode(payload, 'my_secrect')
    end

end
