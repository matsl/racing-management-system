package se.cag.labs.cagrms.admin.resources.apimodel;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class NewUser extends UserInfo {
  private String password;

  public NewUser(final String userId, final String displayName, final String password) {
    super(userId, displayName);
    this.password = password;
  }
}
