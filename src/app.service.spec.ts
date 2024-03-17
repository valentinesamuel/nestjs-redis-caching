import Test from 'supertest/lib/test';
import { AppService } from './app.service';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
 
const mockCacheManager = {
    get: jest.fn(),
    set: jest.fn(),
};

describe('AppService', () => {
    let appService: AppService;
    beforeEach(() => {
        const moduleRef = await Test.createTestingModule({
            providers: [AppService, {
                provide: CACHE_MANAGER,
                useValue: mockCacheManager,
            }],
        }).compile();

        appService = moduleRef.get<AppService>(AppService);

        it('should be defined', () => {
            expect(appService).toBeDefined();
         }
            
});
