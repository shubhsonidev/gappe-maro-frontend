import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  mobileNumber: string = "";

  constructor(private authService: AuthService, private Router: Router, private toastr: ToastrService) {}

  ngOnInit() {}

  sendOtp() {
    if (this.mobileNumber && this.mobileNumber.toString().length === 10) {
      this.authService.loginWithPhoneNumber(this.mobileNumber).subscribe({
        next: (response) => {
          this.toastr.success(`Otp sent Successfully ${response.data.otpGenerated}`);
          this.Router.navigate(["/otp"], {
            queryParams: { Exist: response.data.isExists, mobileNumber: this.mobileNumber },
          });
          console.log("OTP sent successfully:", response);
        },
        error: (error) => {
          console.error("Error sending OTP:", error);
        },
      });
    } else if (!this.mobileNumber) {
      this.toastr.error("Enter the mobile number");
    } else {
      this.toastr.error("10 digits required");
    }
  }
}
