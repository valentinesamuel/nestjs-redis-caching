import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}
  async getHello() {
    await this.cacheManager.set(
      'cached_items',
      {
        key: 32,
      },
      1,
    );
    const cachedItems = await this.cacheManager.get('cached_items');
    console.log(cachedItems);
    return 'Hello World!';
  }
}
