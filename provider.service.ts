import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {
  private baseUrl = 'http://localhost:8080/api/providers';

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(`${this.baseUrl}`);
  }

  findByAgencyName(agencyName: string) {
    return this.http.get(`${this.baseUrl}/${agencyName}`);
  }

  findOneByIdCmsOther(idCmsOther: string) {
    return this.http.get(`${this.baseUrl}/IdCmsOther?id_cms_other=${idCmsOther}`);
  }

  createProvider(providerData: any) {
    return this.http.post(`${this.baseUrl}`, providerData);
  }

  updateProvider(idCmsOther: string, providerData: any) {
    return this.http.put(`${this.baseUrl}/${idCmsOther}`, providerData);
  }

  deleteProvider(idCmsOther: string) {
    return this.http.delete(`${this.baseUrl}/${idCmsOther}`);
  }

  findAllInCounty(county: string) {
    return this.http.get(`${this.baseUrl}/inCounty?county=${county}`);
  }

  findAllInCity(city: string) {
    return this.http.get(`${this.baseUrl}/inCity?city=${city}`);
  }
}
