import { Injectable } from '@nestjs/common';
import { GenericRepository } from '../Repository/generic.repository';
import { RefreshToken } from '../Schemea/refresh-token.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IRefreshTokenRepository } from 'src/auth/Interface/Repository/refresh-token-repository.interface';

@Injectable()
export class RefreshTokenRepository
  extends GenericRepository<RefreshToken>
  implements IRefreshTokenRepository
{
  constructor(
    @InjectModel(RefreshToken.name) private _refreshToken: Model<RefreshToken>,
  ) {
    super(_refreshToken);
  }
}
