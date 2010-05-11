# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_teatime_session',
  :secret      => 'af06e6f59bbee1e90e6b19d8c7a9862ad37fabb5840f54319517bd4b3ea5676b7b723e243c0501768a89567af30d6b1c2d3d178a1b84a398bbe82e346003e58b'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
