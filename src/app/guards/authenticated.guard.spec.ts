import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthenticatedGuard } from './authenticated.guard';

describe('AuthenticatedGuard', () => {
    let guard: AuthenticatedGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule]
        });
        guard = TestBed.inject(AuthenticatedGuard);
    });

    it('should be created', () => {
        expect(guard).toBeTruthy();
    });
});
