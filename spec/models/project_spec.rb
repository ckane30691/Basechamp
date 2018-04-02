require 'rails_helper'

RSpec.describe Project, type: :model do
  describe 'validations' do
    it { should validate_presence_of(:title) }
    it { should validate_presence_of(:author_id) }

  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:todos) }
    it { should have_many(:messages) }
    it { should have_many(:events) }
  end

end
