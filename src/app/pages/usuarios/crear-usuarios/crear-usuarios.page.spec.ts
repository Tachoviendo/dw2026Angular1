import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearUsuariosPage } from './crear-usuarios.page';

describe('CrearUsuariosPage', () => {
  let component: CrearUsuariosPage;
  let fixture: ComponentFixture<CrearUsuariosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearUsuariosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearUsuariosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
