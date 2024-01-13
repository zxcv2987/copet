import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor(private readonly configService: ConfigService) {
    super({
      clientID: configService.get('GOOGLE_CLIENT_ID'), // CLIENT_ID
      clientSecret: configService.get('GOOGLE_SECRET_ID'), // CLIENT_SECRET
      callbackURL: configService.get('GOOGLE_REDIRECT_URL'), // redirect_uri
      passReqToCallback: true,
      scope: ['email', 'profile'], // 가져올 정보들
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    try {
      const { name, emails } = profile;
      const user = {
        email: emails[0].value,
        name: name.givenName,
        accessToken,
      };
      done(null, user);
    } catch (error) {
      done(error);
    }
  }
}
